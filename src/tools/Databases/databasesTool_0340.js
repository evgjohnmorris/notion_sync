/**
 * Generated Tool: databasesTool_0340
 * Domain: Databases
 * ID: 0340
 */
exports.databasesTool_0340 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0340:', error);
    throw error;
  }
};
