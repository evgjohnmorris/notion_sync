/**
 * Generated Tool: databasesTool_0309
 * Domain: Databases
 * ID: 0309
 */
exports.databasesTool_0309 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0309:', error);
    throw error;
  }
};
