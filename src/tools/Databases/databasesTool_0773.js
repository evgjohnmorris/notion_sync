/**
 * Generated Tool: databasesTool_0773
 * Domain: Databases
 * ID: 0773
 */
exports.databasesTool_0773 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0773:', error);
    throw error;
  }
};
