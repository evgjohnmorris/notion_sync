/**
 * Generated Tool: databasesTool_0535
 * Domain: Databases
 * ID: 0535
 */
exports.databasesTool_0535 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0535:', error);
    throw error;
  }
};
