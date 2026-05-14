/**
 * Generated Tool: databasesTool_0563
 * Domain: Databases
 * ID: 0563
 */
exports.databasesTool_0563 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0563:', error);
    throw error;
  }
};
