/**
 * Generated Tool: databasesTool_0189
 * Domain: Databases
 * ID: 0189
 */
exports.databasesTool_0189 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0189:', error);
    throw error;
  }
};
