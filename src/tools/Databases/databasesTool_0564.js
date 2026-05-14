/**
 * Generated Tool: databasesTool_0564
 * Domain: Databases
 * ID: 0564
 */
exports.databasesTool_0564 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0564:', error);
    throw error;
  }
};
