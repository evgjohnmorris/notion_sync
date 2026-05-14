/**
 * Generated Tool: databasesTool_0747
 * Domain: Databases
 * ID: 0747
 */
exports.databasesTool_0747 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0747:', error);
    throw error;
  }
};
