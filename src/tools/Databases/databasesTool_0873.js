/**
 * Generated Tool: databasesTool_0873
 * Domain: Databases
 * ID: 0873
 */
exports.databasesTool_0873 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0873:', error);
    throw error;
  }
};
