/**
 * Generated Tool: databasesTool_0130
 * Domain: Databases
 * ID: 0130
 */
exports.databasesTool_0130 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0130:', error);
    throw error;
  }
};
