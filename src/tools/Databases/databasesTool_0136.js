/**
 * Generated Tool: databasesTool_0136
 * Domain: Databases
 * ID: 0136
 */
exports.databasesTool_0136 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0136:', error);
    throw error;
  }
};
