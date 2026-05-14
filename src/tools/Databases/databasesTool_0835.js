/**
 * Generated Tool: databasesTool_0835
 * Domain: Databases
 * ID: 0835
 */
exports.databasesTool_0835 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0835:', error);
    throw error;
  }
};
