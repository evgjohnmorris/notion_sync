/**
 * Generated Tool: databasesTool_0247
 * Domain: Databases
 * ID: 0247
 */
exports.databasesTool_0247 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0247:', error);
    throw error;
  }
};
