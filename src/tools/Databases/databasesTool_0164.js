/**
 * Generated Tool: databasesTool_0164
 * Domain: Databases
 * ID: 0164
 */
exports.databasesTool_0164 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0164:', error);
    throw error;
  }
};
