/**
 * Generated Tool: databasesTool_0578
 * Domain: Databases
 * ID: 0578
 */
exports.databasesTool_0578 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0578:', error);
    throw error;
  }
};
