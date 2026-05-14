/**
 * Generated Tool: databasesTool_0802
 * Domain: Databases
 * ID: 0802
 */
exports.databasesTool_0802 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0802:', error);
    throw error;
  }
};
