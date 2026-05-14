/**
 * Generated Tool: databasesTool_0011
 * Domain: Databases
 * ID: 0011
 */
exports.databasesTool_0011 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0011:', error);
    throw error;
  }
};
