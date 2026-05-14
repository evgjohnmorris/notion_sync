/**
 * Generated Tool: databasesTool_0464
 * Domain: Databases
 * ID: 0464
 */
exports.databasesTool_0464 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0464:', error);
    throw error;
  }
};
