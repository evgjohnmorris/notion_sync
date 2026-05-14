/**
 * Generated Tool: databasesTool_0122
 * Domain: Databases
 * ID: 0122
 */
exports.databasesTool_0122 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0122:', error);
    throw error;
  }
};
