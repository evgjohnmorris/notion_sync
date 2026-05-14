/**
 * Generated Tool: databasesTool_0859
 * Domain: Databases
 * ID: 0859
 */
exports.databasesTool_0859 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0859:', error);
    throw error;
  }
};
