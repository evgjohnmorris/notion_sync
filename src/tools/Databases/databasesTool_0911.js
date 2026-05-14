/**
 * Generated Tool: databasesTool_0911
 * Domain: Databases
 * ID: 0911
 */
exports.databasesTool_0911 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0911:', error);
    throw error;
  }
};
