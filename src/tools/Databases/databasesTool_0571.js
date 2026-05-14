/**
 * Generated Tool: databasesTool_0571
 * Domain: Databases
 * ID: 0571
 */
exports.databasesTool_0571 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0571:', error);
    throw error;
  }
};
