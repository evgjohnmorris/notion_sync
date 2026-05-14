/**
 * Generated Tool: databasesTool_0847
 * Domain: Databases
 * ID: 0847
 */
exports.databasesTool_0847 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0847:', error);
    throw error;
  }
};
