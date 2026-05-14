/**
 * Generated Tool: databasesTool_0472
 * Domain: Databases
 * ID: 0472
 */
exports.databasesTool_0472 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0472:', error);
    throw error;
  }
};
