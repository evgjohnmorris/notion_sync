/**
 * Generated Tool: databasesTool_0814
 * Domain: Databases
 * ID: 0814
 */
exports.databasesTool_0814 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0814:', error);
    throw error;
  }
};
