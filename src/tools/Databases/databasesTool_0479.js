/**
 * Generated Tool: databasesTool_0479
 * Domain: Databases
 * ID: 0479
 */
exports.databasesTool_0479 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0479:', error);
    throw error;
  }
};
