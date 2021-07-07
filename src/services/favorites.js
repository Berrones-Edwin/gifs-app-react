import { db } from "../firebase/firebase";

export const saveFavoriteGif = async ({ nameCollection, nameDoc }) => {
    return await db
        .collection(` ${nameCollection}/gif/favorites `)
        .add({ id: nameDoc });
};

export const loadFavorites = async ({ uid }) => {
    const notes = [];
    const notesRef = db.collection(` ${uid}/gif/favorites `);
    const snapshot = await notesRef.get();
    snapshot.forEach((doc) => {
        notes.push({
            id: doc.id,
            ...doc.data(),
        });
    });
    return notes;
};
export const deleteGifFavorite = async ({ uid, idGif }) => {
    const notesRef = db
        .collection(` ${uid}/gif/favorites `)
        .doc(idGif)
        .delete();
    const snapshot = await notesRef;

    return snapshot;
};
