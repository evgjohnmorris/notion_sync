/**
 * Generated Tool: databasesTool_0546
 * Domain: Databases
 * ID: 0546
 */
exports.databasesTool_0546 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0546:', error);
    throw error;
  }
};
