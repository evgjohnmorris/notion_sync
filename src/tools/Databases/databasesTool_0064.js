/**
 * Generated Tool: databasesTool_0064
 * Domain: Databases
 * ID: 0064
 */
exports.databasesTool_0064 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0064:', error);
    throw error;
  }
};
