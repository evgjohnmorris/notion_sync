/**
 * Generated Tool: databasesTool_0086
 * Domain: Databases
 * ID: 0086
 */
exports.databasesTool_0086 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0086:', error);
    throw error;
  }
};
