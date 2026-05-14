/**
 * Generated Tool: databasesTool_0727
 * Domain: Databases
 * ID: 0727
 */
exports.databasesTool_0727 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0727:', error);
    throw error;
  }
};
