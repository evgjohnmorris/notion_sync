/**
 * Generated Tool: databasesTool_0304
 * Domain: Databases
 * ID: 0304
 */
exports.databasesTool_0304 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0304:', error);
    throw error;
  }
};
