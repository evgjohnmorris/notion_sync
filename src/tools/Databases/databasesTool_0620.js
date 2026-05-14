/**
 * Generated Tool: databasesTool_0620
 * Domain: Databases
 * ID: 0620
 */
exports.databasesTool_0620 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0620:', error);
    throw error;
  }
};
