/**
 * Generated Tool: databasesTool_0222
 * Domain: Databases
 * ID: 0222
 */
exports.databasesTool_0222 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0222:', error);
    throw error;
  }
};
