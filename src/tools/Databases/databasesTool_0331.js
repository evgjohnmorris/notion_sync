/**
 * Generated Tool: databasesTool_0331
 * Domain: Databases
 * ID: 0331
 */
exports.databasesTool_0331 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0331:', error);
    throw error;
  }
};
