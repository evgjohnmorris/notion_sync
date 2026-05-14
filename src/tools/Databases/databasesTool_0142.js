/**
 * Generated Tool: databasesTool_0142
 * Domain: Databases
 * ID: 0142
 */
exports.databasesTool_0142 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0142:', error);
    throw error;
  }
};
