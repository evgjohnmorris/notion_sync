/**
 * Generated Tool: databasesTool_0342
 * Domain: Databases
 * ID: 0342
 */
exports.databasesTool_0342 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0342:', error);
    throw error;
  }
};
