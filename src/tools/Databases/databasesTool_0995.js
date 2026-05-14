/**
 * Generated Tool: databasesTool_0995
 * Domain: Databases
 * ID: 0995
 */
exports.databasesTool_0995 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0995:', error);
    throw error;
  }
};
