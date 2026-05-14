/**
 * Generated Tool: databasesTool_0785
 * Domain: Databases
 * ID: 0785
 */
exports.databasesTool_0785 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0785:', error);
    throw error;
  }
};
