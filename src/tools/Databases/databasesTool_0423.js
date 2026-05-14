/**
 * Generated Tool: databasesTool_0423
 * Domain: Databases
 * ID: 0423
 */
exports.databasesTool_0423 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0423:', error);
    throw error;
  }
};
