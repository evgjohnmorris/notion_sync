/**
 * Generated Tool: databasesTool_0307
 * Domain: Databases
 * ID: 0307
 */
exports.databasesTool_0307 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0307:', error);
    throw error;
  }
};
