/**
 * Generated Tool: databasesTool_0447
 * Domain: Databases
 * ID: 0447
 */
exports.databasesTool_0447 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0447:', error);
    throw error;
  }
};
