/**
 * Generated Tool: databasesTool_0144
 * Domain: Databases
 * ID: 0144
 */
exports.databasesTool_0144 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0144:', error);
    throw error;
  }
};
