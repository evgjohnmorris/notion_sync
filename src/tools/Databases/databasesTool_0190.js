/**
 * Generated Tool: databasesTool_0190
 * Domain: Databases
 * ID: 0190
 */
exports.databasesTool_0190 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0190:', error);
    throw error;
  }
};
