/**
 * Generated Tool: databasesTool_0174
 * Domain: Databases
 * ID: 0174
 */
exports.databasesTool_0174 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0174:', error);
    throw error;
  }
};
