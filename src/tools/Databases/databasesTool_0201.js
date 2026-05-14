/**
 * Generated Tool: databasesTool_0201
 * Domain: Databases
 * ID: 0201
 */
exports.databasesTool_0201 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0201:', error);
    throw error;
  }
};
