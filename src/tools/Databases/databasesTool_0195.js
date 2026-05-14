/**
 * Generated Tool: databasesTool_0195
 * Domain: Databases
 * ID: 0195
 */
exports.databasesTool_0195 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0195:', error);
    throw error;
  }
};
