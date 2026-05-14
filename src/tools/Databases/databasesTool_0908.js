/**
 * Generated Tool: databasesTool_0908
 * Domain: Databases
 * ID: 0908
 */
exports.databasesTool_0908 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0908:', error);
    throw error;
  }
};
