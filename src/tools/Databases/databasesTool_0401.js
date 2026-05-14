/**
 * Generated Tool: databasesTool_0401
 * Domain: Databases
 * ID: 0401
 */
exports.databasesTool_0401 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0401:', error);
    throw error;
  }
};
