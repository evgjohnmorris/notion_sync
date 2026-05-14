/**
 * Generated Tool: databasesTool_0230
 * Domain: Databases
 * ID: 0230
 */
exports.databasesTool_0230 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0230:', error);
    throw error;
  }
};
