/**
 * Generated Tool: databasesTool_0210
 * Domain: Databases
 * ID: 0210
 */
exports.databasesTool_0210 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0210:', error);
    throw error;
  }
};
