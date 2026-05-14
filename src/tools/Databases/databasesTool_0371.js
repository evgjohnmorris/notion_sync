/**
 * Generated Tool: databasesTool_0371
 * Domain: Databases
 * ID: 0371
 */
exports.databasesTool_0371 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0371:', error);
    throw error;
  }
};
